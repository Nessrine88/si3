import { defineField, defineType } from "sanity";
import { List } from "postcss/lib/list";


export default {
    name: 'cardData',
    title: 'Card Data',
    type: 'document',
    fields: [
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'status',
        title: 'Status',
        type: 'string',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        name: 'users',
        title: 'Users',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              { name: 'icon', type: 'image', title: 'Icon' },
              { name: 'name', type: 'string', title: 'Name' },
            ],
          },
        ],
      },
      {
        name: 'buttonText',
        title: 'Button Text',
        type: 'string',
      },
    ],
  };
  