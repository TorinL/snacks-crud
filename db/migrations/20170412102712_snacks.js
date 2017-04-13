exports.up = function(knex) {
    return knex.schema.createTable('snacks', table => {
        table.increments();
        table.string('name').notNullable();
        table.text('image_url').notNullable();
        table.text('review').notNullable();
        table.integer('rating').notNullable();
        table.timestamps(true, true);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('snacks');
};
