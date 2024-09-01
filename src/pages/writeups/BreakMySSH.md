---
layout: ../../layouts/Layout.astro
name: "Máquina BreakMySSH"
url: "writeups/BreakMySSH"
difficulty: "Facil"
platform: "DockerLabs"
vulnerabilities: ["Vulnerabilidad 1", "Vulnerabilidad 2"]
inProgress: false
title: "BreakMySSH"
date: "01-09-2024"
---

<!-- Espaciado superior -->
<article class="mt-16 mr-20 ml-20 text-black dark:text-white justify-center items-center">

  <h2 class="text-2xl font-bold mb-4">Descripción</h2>

  <p class="mb-6">
    En este writeup se describe el proceso para explotar una vulnerabilidad en la máquina XYZ del entorno de pruebas. Se incluyen detalles sobre la configuración, las herramientas utilizadas y los pasos seguidos para lograr el objetivo.
  </p>

  <h2 class="text-2xl font-bold mb-4">Paso 1: Reconocimiento</h2>

  <p class="mb-6">
    Se realizó un escaneo inicial para identificar los servicios en ejecución y las posibles vulnerabilidades.
  </p>

  <ul class="list-disc pl-5 mb-6">
    <li><strong>Herramienta utilizada</strong>: Nmap</li>
    <li><strong>Comando</strong>: <code class="bg-gray-200 px-2 py-1 rounded">nmap -sV -p- 192.168.1.1</code></li>
  </ul>

  <h2 class="text-2xl font-bold mb-4">Paso 2: Explotación</h2>

  <p class="mb-6">
    Se identificó una vulnerabilidad en el servicio HTTP. Se utilizó un exploit específico para aprovechar la vulnerabilidad.
  </p>

  <ul class="list-disc pl-5 mb-6">
    <li><strong>Exploit utilizado</strong>: <code class="bg-gray-200 px-2 py-1 rounded">exploit.py</code></li>
    <li><strong>Comando</strong>: <code class="bg-gray-200 px-2 py-1 rounded">python exploit.py -t 192.168.1.1</code></li>
  </ul>

  <h2 class="text-2xl font-bold mb-4">Paso 3: Obtención de Shell</h2>

  <p class="mb-6">
    Una vez explotada la vulnerabilidad, se obtuvo un shell de acceso remoto.
  </p>

  <ul class="list-disc pl-5 mb-6">
    <li><strong>Shell utilizado</strong>: Netcat</li>
    <li><strong>Comando</strong>: <code class="bg-gray-200 px-2 py-1 rounded">nc -lvnp 4444</code></li>
  </ul>

  <h2 class="text-2xl font-bold mb-4">Conclusión</h2>

  <p class="mb-6">
    Se obtuvo acceso completo a la máquina y se recogieron los datos requeridos. Se recomienda aplicar los parches necesarios para mitigar la vulnerabilidad.
  </p>

  <h2 class="text-2xl font-bold mb-4">Código</h2>

  <pre class="bg-gray-200 p-4 rounded">
<code class="language-javascript">
console.log("hola mundo")
</code>
  </pre>

  <h2 class="text-2xl font-bold mb-4">Recursos</h2>

  <ul class="list-disc pl-5 mb-6">
    <li><a href="https://example.com/exploit" class="text-blue-500 hover:underline">Referencia del exploit</a></li>
    <li><a href="https://example.com/service-docs" class="text-blue-500 hover:underline">Documentación del servicio</a></li>
  </ul>

</article>
