const generateFuzzySet = (size, fuzzySetName) => {
    const letters = [ 'a', 'b', 'c', 'd', 'e' ];
    const muValues = Array.from({ length: size }, () => Number(Math.random().toFixed(1)));
    const latexFuzzySet = `${fuzzySetName} = \\{ x | \\mu(x) \\} = \\{ ${muValues.map((muValue, index) => `${ letters[index] } | ${muValue}`).join(', ')} \\}`;
    return [muValues, latexFuzzySet];
}

module.exports = generateFuzzySet;
