import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { expect, test } from 'vitest';
import TextSection from '../src/components/sections/TextSection.astro'


test('Section with Text slots', async () => {
  const container = await AstroContainer.create();
  const result = await container.renderToString(TextSection, {
    slots: {
      default: 'Text content',
    },
  });


  expect(result).toContain('Text content');
});