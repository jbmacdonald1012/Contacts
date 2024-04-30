const home = (req, res, next) => {
    res.json('Esteissy Macdonald');
}

const kids = (req, res,next) => {
    res.json('Logan Macdonald, Chloe Macdonald, Isabella Macdonald, Charlotte Macdonald');
}

module.exports = {
    home,
    kids
}
