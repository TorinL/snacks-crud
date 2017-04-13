exports.seed = function(knex) {
    return knex('snacks').del()
        .then(() => {
            return knex('snacks').insert([{
                    id: 1,
                    name: 'Apple',
                    image_url: 'https://staticdelivery.nexusmods.com/mods/110/images/74627-0-1459502036.jpg',
                    review: "Quick, easy, healthy",
                    rating: "3"
                },
                {
                    id: 2,
                    name: 'Almonds',
                    image_url: 'https://sc01.alicdn.com/kf/UT84VkFXOXaXXcUQpbXg/Almond-nuts.png',
                    review: 'Healthy source of fat. Somewhat bland.',
                    rating: "4"
                },
                {
                    id: 3,
                    name: 'Sour Patch Kids',
                    image_url: 'https://images-na.ssl-images-amazon.com/images/G/01/aplusautomation/vendorimages/b537d28d-a55b-4663-99d8-21c139ea3a45.png._CB271200013__SL220__.png',
                    review: "First they're sour, then they're sweet!",
                    rating: "5"
                }
            ])
        }).then(() => {
            return knex.raw(
                "SELECT setval('snacks_id_seq', (SELECT MAX(id) FROM snacks));"
            )
        })
}
