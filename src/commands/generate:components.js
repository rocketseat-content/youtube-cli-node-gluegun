module.exports = {
  name: 'generate:components',
  description: 'Create components inside src/components',
  run: async toolbox => {
    const {
      parameters,
      createComponent,
    } = toolbox

    for (var i = 0; i < parameters.array.length; i++) {
      const name = parameters.array[i]

      await createComponent('src/components', name)
    }
  },
};