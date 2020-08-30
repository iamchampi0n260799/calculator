const insert = (content) => {
    const textviewContent = document.form.textview.value = document.form.textview.value + content;
    return textviewContent;
}
const equal = () => {
    const textviewContent = document.form.textview.value;
    document.form.textview.value = eval(textviewContent);
}
const back = () => {
    const textviewContent = document.form.textview.value;
    console.log(textviewContent);
    const a = textviewContent.substring(0, textviewContent.length -1)
    document.form.textview.value = a
}
const clean = () => {
    document.form.textview.value = "";
}