---
title: Cloud
description: Install Ghost on the Cloud
---

Ghost can be installed on every hosting that provides a shell access. If you want to install Ghost on your own hosting be sure to respect the following prerequisites:

## Prerequisites
The officially recommended production installation requires the following stack:

* Ubuntu 16.04, Ubuntu 18.04 or Ubuntu 20.04
* NGINX (minimum of 1.9.5 for SSL)
* A [*supported version*](https://ghost.org/docs/faq/node-versions/) of [**Node.js**](https://nodejs.org/en/)
* MySQL 5.7 or 8.0
* Systemd
* A server with at least 1GB memory
* A registered domain name

Before getting started you should set up a working DNS A-Record from you domain, pointing to the server’s IP address. This must be done in advance so that SSL can be configured during setup.

## Setup Guide

Follow up official [*Ghost guide*](https://ghost.org/docs/install/ubuntu/) to install on Ubuntu.

## One Click Hostings

If you don't want to setup Ghost alone, there are many solutions with a one-click installer:

* [Ghost(pro)](https://ghost.org/pricing/);
* Pre-built Droplet for [DigitalOcean](https://marketplace.digitalocean.com/apps/ghost);
* [Aws Image](https://aws.amazon.com/marketplace/pp/prodview-oh2quotkaesdk#pdp-reviews) packaged by Bitnami;

## Docker

If you want to use containers, Ghost also provides an official [Docker Image](https://hub.docker.com/_/ghost).
That you can use on any docker based hosting service like [Aws Fargate](https://aws.amazon.com/it/fargate/)