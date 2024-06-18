# Instructions to use ```<Button/>```

Cards provide a flexible and extensible content container with multiple variants and options.  as shown in [this figma design](https://www.figma.com/file/EzHwLyhRo61Npn3uxore3o/Meta?node-id=716%3A46877).
## BUTTON COMPONENT PROPS

| NAME        | TYPE            | DEFAULT       | DESCRIPTION   |
| ----------- | --------------- | --------- | ----------- |
| name     | string |       | Name of the Button.     | 
| disabled     | boolean |    false   | Disables the Button, preventing mouse events.     | 
| className     | string |       | Allows user to add custom style classes.     | 
| leftIcon     | Node  |       | Render a Icon on left of the card component.     |
| rightIcon     | Node  |       | Render a Icon on Right of the card component.     |
| onChange     | function  |       | A callback fired when the underlying input element changes. This is passed directly to the <input> so shares the same signature as a native onChange event.     |



## Example for using  `<Button/>`

```javascript 
export const TestButton = () => {
    
    const {disable, setDisable} = useState(false)
    const handleDisable = () => {
        setDisable(!disable)
    }

    return (
        <Button
            name='Save'
            variant='active'
            disabled={disable}
            onClick={handleDisable}
          />
    )
}
 ```        
