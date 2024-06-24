import './style.css'


const color_palette = {

'#227C9D' : 'Cerulean',
'#17C3B2': 'Light sea green',
'#FFCB77': 'Sunset',
'#FEF9EF': 'Floral white',
'#FE6D73': 'Light Red',
};


const addOptionsToColorPicker = () => {
  const colorPickerSelect = document.querySelector("#color-picker");

  Object.keys(color_palette).forEach((color) => {
    const option = document.createElement("option");
    option.value = color;
    option.innerText = color_palette[color];

    colorPickerSelect.append(option);
  })
}
d


const addEventListenerToColorPicker = () => {
  const colorPickerSelect = document.querySelector("#color-picker");

  colorPickerSelect.addEventListener("change", (event) => {

    const newColor = event.target.value; 
    //Almacenamos el código de color

    document.body.style.backgroundColor = newColor;
    //Le aplicamos el background color con el código de color seleccionado
    
  });
};

addOptionsToColorPicker();
addEventListenerToColorPicker();


const colorNameText = `${color_palette[newColor]} | ${newColor}` 
    colorName.innerText = color_palette[newColor] ? colorNameText : "-";