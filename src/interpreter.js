function interpreter(input) {
    if (typeof(input) != "object") {
        input = JSON.parse(input)
    }

    let output = '';
    let blocks = input.blocks

    for (let i = 0; i < blocks.length; i++) {
        switch (blocks[i].type) {
            case 'header':
                output += `<h${blocks[i].data.level}>${blocks[i].data.text}</h${blocks[i].data.level}>`
                break
            case 'paragraph':
                output += `<p>${blocks[i].data.text}</p>`
                break
            case 'linkTool':
                output += `<a href="${blocks[i].data.link}">${blocks[i].data.meta.title}</a>`
                break
            case 'list':
                output += `<ul>`
                for (let j = 0; blocks[i].data.items.length; j++) {
                    output += `<li>${blocks[i].data.items[j]}</li>`
                }
                output += `</ul>`
                break
            case 'image':
                output += `<img src="${blocks[i].data.file.url}" alt="${blocks[i].data.caption}">`
                break
            case 'code':
                output += `<code>`
                let splitCode = blocks[i].data.code.split('')
                for (let j = 0; j < splitCode.length; j++) {
                    if (splitCode[j] === '<') {
                        output += `&lt;`
                    } else if (splitCode[j] === '>') {
                        output += `&gt;`
                    } else {
                        output += splitCode[j]
                    }
                }
                output += `</code>`
        }
    }

    return output
}
