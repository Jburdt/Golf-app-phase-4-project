ActiveRecord::Schema.define(version: 2023_03_06_172939) do

  create_table "courses", force: :cascade do |t|
    t.string "name"
    t.string "address"
    t.string "state"
    t.decimal "cost"
    t.string "image"
    t.integer "final_score"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "golfers", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "username"
    t.string "password_digest"
  end

  create_table "tee_times", force: :cascade do |t|
    t.integer "food_rating"
    t.integer "drink_rating"
    t.string "greens"
    t.integer "golfer_id"
    t.integer "course_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "time"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
