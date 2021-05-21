---
theme: seriph
background: https://source.unsplash.com/collection/94734566/1920x1080
class: text-center
highlighter: shiki
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
---

# Modular Frontends


---

# Introducing Module Federation! 🎉

<br>

Module Federation aims to solve the sharing of modules in a distributed system.

<br>

- Module Federation allows JavaScript application to dynamically import code from another application at runtime.
- The module will build a unique JavaScript entry file which can be downloaded.
- It also tackles the problem of code dependency and increased bundle size by enabling dependency sharing.

---

# Introducing Module Federation! 🎉

There are two main concepts to get your head around: the Host's and the Remote's.

- **Host**
  - It loads all the initial chunks, boots the app and renders what the user will see first
  - It will reference the remotely bundled shared components.

- **Remote**
  - A remote's job is to offer up, or rather expose modules that can be consumed by the host.
  - allowing the remote to not have to download shared dependencies.

---

# Federation Plugin 🕺

But most of the time, you will want your apps to both expose and/or consume federated modules.

<br>

```javascript
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

new ModuleFederationPlugin({
    name: 'app_two', // Will be used as the entry file name
    library: { type: 'global', name: 'app_two' }, // Will assign the output of the build
    filename: "remoteEntry.js", // The name of the specialized entry file.
    remotes: { // All the remote applications
      app_one: 'app_one',
      app_three: 'app_three'
    },
    exposes: { // Expose the component for consumption by other apps.
       AppContainer: './src/App'
    },
    shared: ['react', 'react-dom'] // This library will be imported if the consumer app doesn’t have it.
}),

```

---

# Diagrams

<br>
<br>

<div class="pt-12">
  <a href="https://lucid.app/lucidchart/09a09c87-b85b-4117-a948-36ba3433d914/edit?referringApp=slack&shared=true&page=0_0#" class="px-2 p-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Go to diagram <carbon:arrow-right class="inline"/>
  </a>
</div>

---

# The bad 👎

- Tightly coupled with webpack 5
- Sharing states it can be messy
