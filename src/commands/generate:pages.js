module.exports = {
  name: 'generate:pages',
  description: 'Create pages inside src/pages',
  run: async toolbox => {
    const {
      parameters,
      createComponent,
      print,
    } = toolbox

    if( parameters.array.length === 0){
      print.error('Inavlid arguments!');

      print.info('Name at least on page. Ex: generate:pages page1 page2 ...');

      return;
    }
    
    for (var i = 0; i < parameters.array.length; i++) {

      let path = parameters.array[i].split(toolbox.filesystem.separator);
      path = path.map(p=> p.charAt(0).toUpperCase() + p.slice(1))
      const name = path[path.length -1];
      path.pop();
      path = path.join(`${toolbox.filesystem.separator}`);
      
      await createComponent(`src/pages/${path && path+toolbox.filesystem.separator}`, name)

      if(parameters.options.routes){
        toolbox.filesystem.append('src/routes.js', `import ${name} from './pages/${path && path+toolbox.filesystem.separator}${name}';\n`)
      }
    }
    
  },
};