# React Banners

A fancy banner component for react.

## Props

| name            | description                                                         | required | default                                                      |
| --------------- | ------------------------------------------------------------------- | -------- | ------------------------------------------------------------ |
| items           | collection of [Item Type](#item-type)                               | true     | []                                                           |
| width           | width of the component                                              | false    | 200                                                          |
| height          | height of the component                                             | false    | 200                                                          |
| timing          | delay between card switch                                           | false    | 5000                                                         |
| cardStyle       | style of the [Top Card Style Props](#top-card-style-props)          | false    | check [Top Card Style Props](#top-card-style-props)          |
| stackCardStyles | style of the [Stacked Cards Style Props](#stacked-card-style-props) | false    | check [Stacked Cards Style Props](#stacked-card-style-props) |

<br />

### Item Type

| name    | description                                  | required | type                           |
| ------- | -------------------------------------------- | -------- | ------------------------------ |
| id      | unique key for each component being rendered | true     | `string`                       |
| content | content that renders inside the cards        | true     | `string` or custom `Component` |

<br />

### Top Card Style Props

| name            | description                                    | required | default                                                            |
| --------------- | ---------------------------------------------- | -------- | ------------------------------------------------------------------ |
| backgroundColor | background-color applied to top card           | false    | `#ffffff`                                                          |
| borderRadius    | border-radius applied to ALL sides of top card | false    | 0px                                                                |
| boxShadow       | box-shadow behind top card                     | false    | `0 15px 35px rgba(50, 50, 93, 0.1),0 5px 15px rgba(0, 0, 0, 0.07)` |
| padding         | padding applied to top card                    | false    | 0px                                                                |

<br />

### Stacked Card Style Props

| name        | description                             | required | default   |
| ----------- | --------------------------------------- | -------- | --------- |
| secondColor | background-color applied to second card | false    | `#f0f0f0` |
| thirdColor  | background-color applied to third card  | false    | `#fafafa` |
