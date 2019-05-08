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

ActiveRecord::Schema.define(version: 2019_05_08_000606) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

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

  create_table "quest_events", force: :cascade do |t|
    t.string "title"
    t.string "scenario"
    t.string "challenge_type"
    t.integer "challenge_rating"
  end

  create_table "quests", force: :cascade do |t|
    t.string "title"
    t.integer "quest_event1"
    t.integer "quest_event2"
    t.integer "quest_event3"
  end

  add_foreign_key "character_genders", "characters"
  add_foreign_key "character_genders", "genders"
  add_foreign_key "character_orientations", "characters"
  add_foreign_key "character_orientations", "orientations"
end
