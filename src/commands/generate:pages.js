module.exports = {
  name: 'generate:pages',
  description: 'Create pages inside src/pages',
  run: async toolbox => {
    const {
      parameters,
      createComponent,
    } = toolbox

    for (var i = 0; i < parameters.array.length; i++) {
      const name = parameters.array[i]

      await createComponent('src/pages', name)
    }
    
  },
};