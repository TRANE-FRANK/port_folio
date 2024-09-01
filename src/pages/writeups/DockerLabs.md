---
layout: ../../layouts/Layout.astro
name: "Máquina DockerLabs"
url: "writeups/BreakMySSH"
difficulty: "Facil"
platform: "DockerLabs"
vulnerabilities: ["Vulnerabilidad 1", "Vulnerabilidad 2"]
inProgress: false
title: "DockerLabs"
date: "01-09-2024"
---

## Descripción

En este writeup se describe el proceso para explotar una vulnerabilidad en la máquina XYZ del entorno de pruebas. Se incluyen detalles sobre la configuración, las herramientas utilizadas y los pasos seguidos para lograr el objetivo.

## Paso 1: Reconocimiento

Se realizó un escaneo inicial para identificar los servicios en ejecución y las posibles vulnerabilidades.

- **Herramienta utilizada**: Nmap
- **Comando**: `nmap -sV -p- 192.168.1.1`

## Paso 2: Explotación

Se identificó una vulnerabilidad en el servicio HTTP. Se utilizó un exploit específico para aprovechar la vulnerabilidad.

- **Exploit utilizado**: `exploit.py`
- **Comando**: `python exploit.py -t 192.168.1.1`

## Paso 3: Obtención de Shell

Una vez explotada la vulnerabilidad, se obtuvo un shell de acceso remoto.

- **Shell utilizado**: Netcat
- **Comando**: `nc -lvnp 4444`

## Conclusión

Se obtuvo acceso completo a la máquina y se recogieron los datos requeridos. Se recomienda aplicar los parches necesarios para mitigar la vulnerabilidad.

## Recursos

- [Referencia del exploit](https://example.com/exploit)
- [Documentación del servicio](https://example.com/service-docs)
