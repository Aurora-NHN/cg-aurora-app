const formatParagraph = (text) => {
    if (text === null) {
        return [""];
    }
    if (!text) {
        return [];
    }
    const sentences = text.split(". ");
    const paragraphs = [];
    for (let i = 0; i < sentences.length; i += 4) {
        const paragraph = sentences.slice(i, i + 4).join(". ");
        paragraphs.push(paragraph);
    }
    return paragraphs;
};

export default formatParagraph;