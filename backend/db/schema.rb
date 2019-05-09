# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_05_09_112710) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "character_dates", force: :cascade do |t|
    t.bigint "relationships_id"
    t.integer "points"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["relationships_id"], name: "index_character_dates_on_relationships_id"
  end

  create_table "character_genders", force: :cascade do |t|
    t.bigint "character_id"
    t.bigint "gender_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["character_id"], name: "index_character_genders_on_character_id"
    t.index ["gender_id"], name: "index_character_genders_on_gender_id"
  end

  create_table "character_orientations", force: :cascade do |t|
    t.bigint "character_id"
    t.bigint "orientation_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["character_id"], name: "index_character_orientations_on_character_id"
    t.index ["orientation_id"], name: "index_character_orientations_on_orientation_id"
  end

  create_table "characters", force: :cascade do |t|
    t.string "name"
    t.string "race"
    t.string "character_class"
    t.string "bio"
    t.string "img"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "date_events", force: :cascade do |t|
    t.string "title"
    t.string "situation"
    t.string "challenge_type"
    t.integer "challenge_rating"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "genders", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "orientations", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "relationships", force: :cascade do |t|
    t.bigint "user_character_id"
    t.bigint "character_id"
    t.integer "progress"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["character_id"], name: "index_relationships_on_character_id"
    t.index ["user_character_id"], name: "index_relationships_on_user_character_id"
  end

  create_table "user_characters", force: :cascade do |t|
    t.string "username"
    t.string "name"
    t.string "race"
    t.string "character_class"
    t.string "img"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "user_genders", force: :cascade do |t|
    t.bigint "user_character_id"
    t.bigint "gender_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["gender_id"], name: "index_user_genders_on_gender_id"
    t.index ["user_character_id"], name: "index_user_genders_on_user_character_id"
  end

  create_table "user_orientations", force: :cascade do |t|
    t.bigint "user_character_id"
    t.bigint "orientation_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["orientation_id"], name: "index_user_orientations_on_orientation_id"
    t.index ["user_character_id"], name: "index_user_orientations_on_user_character_id"
  end

  add_foreign_key "character_dates", "relationships", column: "relationships_id"
  add_foreign_key "character_genders", "characters"
  add_foreign_key "character_genders", "genders"
  add_foreign_key "character_orientations", "characters"
  add_foreign_key "character_orientations", "orientations"
  add_foreign_key "relationships", "characters"
  add_foreign_key "relationships", "user_characters"
  add_foreign_key "user_genders", "genders"
  add_foreign_key "user_genders", "user_characters"
  add_foreign_key "user_orientations", "orientations"
  add_foreign_key "user_orientations", "user_characters"
end
