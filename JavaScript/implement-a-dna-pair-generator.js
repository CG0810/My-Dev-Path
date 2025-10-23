

function pairElement(string) {
    const pairs = { 'A': 'T', 'T': 'A', 'C': 'G', 'G': 'C'};
    return string.split('').map(char => [char, pairs[char]]);
}

