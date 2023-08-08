const knex = require("../database/knex")

class TagsController {
    async index(request, response) {
        const {user_id} = request.params

// vai nas tags e me tras onde o nome seja igual ao user_id
        const tags = await knex("tags")
        .where({ user_id })

        return response.json(tags)
    }
}

module.exports = TagsController