

    function uniteUnique(...arrays) {
        const combined = [].concat(...arrays);
        const unique = [];
        combined.forEach(item => {
            if (!unique.includes(item)) {
                unique.push(item);
            }
        });
        return unique;
    }
