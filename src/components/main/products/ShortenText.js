function ShortenText(text, maxLength = 10) {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + "...";
  } else {
    return text;
  }
}

export default ShortenText;
