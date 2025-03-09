import plugin from 'tailwindcss/plugin';

export default plugin(({ matchUtilities, theme }) => {
  matchUtilities({
    'bg-pack': (value) => {
      const [setColor, packColor] = value
        .replace(/\-/g, '.')
        .split(',')
        .map((color) => theme(`colors.${color}`));

      return {
        background: `linear-gradient(0deg, ${setColor} 10%, ${packColor} 10%, ${packColor} 90%, ${setColor} 90%)`,
      };
    },
  });
});
