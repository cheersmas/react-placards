# React Banners

A fancy banner component for react.

## Getting Started

A default `height` and `width` is given to the component and is required to render the component.

```sh

  import React, {useMemo} from 'react';
  import {Banners} from 'react-banners'

  export const Content = ({ heading, date, description }) => (
    <div style={{fontSize: 14}}>
      <strong>{heading}</strong> <span class="date">{date}</span>
      <p>{description}</p>
    </div>
  );

  function App() {
    const configuration = useMemo(() => ({
      items: [
        {
          id: "content-types",
          content: <Content
            heading="Content Types"
            date="12-12-2020"
            description={"You can pass in a string or a component."}
          />
        },
        {
          id: "custom-components",
          content: <Content
            heading="Custom Components"
            date="13-12-2020"
            description={"You can create your own custom components"}
          />
        },
        {
          id: "editing-first-card",
          content: <Content
            heading="Editing First Card"
            date="01-04-2021"
            description={"You can format the style of current card."}
          />
        },
        {
          id: "text-value",
          content: "You can pass in a plain text string too."
        }
      ],
      width: 600,
      height: 400,
      timing: 7000,
      cardStyle: {
        borderRadius: '4px',
        padding: '32px'
      },
      stackCardStyles: {
        secondColor: '#fefe',
        thirdColor: '#efef'
      }
    }), []);
    return (
      <div className="App">
        <Banners {...configuration} />
      </div>
    );
  }
  export default App;

```

## Props

| name            | description                                                         | required | default                                                      |
| --------------- | ------------------------------------------------------------------- | -------- | ------------------------------------------------------------ |
| items           | collection of [Item Type](#item-type)                               | true     | []                                                           |
| width           | width of the component                                              | false    | 200                                                          |
| height          | height of the component                                             | false    | 200                                                          |
| timing          | delay between card switch                                           | false    | 5000                                                         |
| cardStyle       | style of the [Top Card Style Props](#top-card-style-props)          | false    | check [Top Card Style Props](#top-card-style-props)          |
| stackCardStyles | style of the [Stacked Cards Style Props](#stacked-card-style-props) | false    | check [Stacked Cards Style Props](#stacked-card-style-props) |

### Item Type

| name    | description                                  | required | type                           |
| ------- | -------------------------------------------- | -------- | ------------------------------ |
| id      | unique key for each component being rendered | true     | `string`                       |
| content | content that renders inside the cards        | true     | `string` or custom `Component` |

<h3>
  You can pass in a component or a string to content
</h3>

> top card's styles will be applied to all the item's content

```sh
  items = [
    {
      id: 'unique-id',
      content: <MyCustomComponent {...props} />
    },
    {
      id: 'unique-id-2',
      content: 'Text content'
    }
  ]
```

### Top Card Style Props

Use the props below to change the styles of top card.

> Note: For more control on styles, reset the default styles and create your own Custom Card component

| name            | description                                    | required | default                                                            |
| --------------- | ---------------------------------------------- | -------- | ------------------------------------------------------------------ |
| backgroundColor | background-color applied to top card           | false    | `#ffffff`                                                          |
| borderRadius    | border-radius applied to ALL sides of top card | false    | 0px                                                                |
| boxShadow       | box-shadow behind top card                     | false    | `0 15px 35px rgba(50, 50, 93, 0.1),0 5px 15px rgba(0, 0, 0, 0.07)` |
| padding         | padding applied to top card                    | false    | 0px                                                                |

### Stacked Card Style Props

| name        | description                             | required | default   |
| ----------- | --------------------------------------- | -------- | --------- |
| secondColor | background-color applied to second card | false    | `#f0f0f0` |
| thirdColor  | background-color applied to third card  | false    | `#fafafa` |

## Meta

Inspired from [Stripe](https://stripe.com/)'s Announcement Banners. (Sadly has been removed now :'( )

Distributed under the MIT license. See `LICENSE` for more information.
