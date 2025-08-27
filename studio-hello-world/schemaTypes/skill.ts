import {defineField, defineType} from 'sanity'

export const skill = defineType({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: "Title",
      type: 'string',
    }),
    defineField({
      name: 'progress',
      title: "Progress",
      type: 'number',
      validation: (Rule) => Rule.min(0).max(100),
    }),
    defineField({
      name: 'image',
      title: "image",
      type: 'image',
      options: {
        hotspot: true,
      }
    }),
  ],
})