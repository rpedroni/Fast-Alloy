# Fast Alloy
## Quick Titanium Alloy project generator using CoffeeScript, Jade and STSS

### Warning:
#### This is in a very early stage of development. Use at own risk

### Sub-generators
- Create files using the provided sub-generators
    - MVC
        - controller.coffee
        - view.jade
        - style.stss
    - Individual files (controller, view or style)
    
### Roadmap
- Generate files for
    - Widgets (complete stack inside app/widgets folder)
    - CommonJS modules
    
- Alloy project structure (default directories and files provided by Alloy)
- index.coffee, index.stss and index.jade
- Gruntfile.js with tasks for:
    - Watch'ing changes
    - Generate JavaScript from CoffeeScript
    - Generate XML from Jade templates
    - Generate TSS from STSS (Sassy TSS) files