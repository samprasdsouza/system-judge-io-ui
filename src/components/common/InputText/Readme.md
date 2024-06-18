# Instructions to use ```<InputText/>```

InputText renders input HTML feild for user with customisation. as shown in [this figma design](https://www.figma.com/file/EzHwLyhRo61Npn3uxore3o/Meta?node-id=716%3A46877).
## InputText COMPONENT PROPS

| NAME        | TYPE            | DEFAULT       | DESCRIPTION   |
| ----------- | --------------- | --------- | ----------- |
| label     | string |       | Render a label for the InputText component.     |
| value     | string |       | Assign a value for the InputText component.     |
| containerClass     | string |       | Assign a style class for the InputText component.     |
| alertMessage     | string |       | Render a alter message for the InputText component based on the variant.     | 
| variant     | string | "standard"      | Render a variant of input feild as className for the InputText component.  it can be of any user defined type | 
| required     | boolean |    false   | provides '*' icon for InputText component |
| name     | string |       | assign unique name for the InputText component.     | 
| tooltip     | string |       | Provides InfoIcon with tootlip next to Label in InputText component |
| isDisabled     | boolean |   false    | To disable the InputText component.     | 
| description     | string |       | Render a description for the InputText component.     | 
| rightIcon     | node |       | Render a icon right end of the InputText component.     | 
| leftIcon     | node |       | Render a icon left end of the InputText component.     | 
| onChange     | function |    | Callback function when value of the InputText component changes.   |
| onBlur     | function |    | Callback function when InputText component loses focus.   |


## Example for using  `<InputText/>`

```javascript 
export const TestInputText = () => {
    
    const handleInput = (event) => {
        let { name, value } = event.target
        // user defined changes
   }
   const validateText = (event) => {
        let { name, value } = event.target
        // user defined changes
   }
    return (
       <InputText
            name="name"
            label="test Name"
            required
            type="text"
            containerClass={``}
            value={'formData.name'}
            onChange={handleInput}
            onBlur={validateText}
            alertMessage={'errors'}
            isDisabled={false}
          />
    )
}
 ```        
