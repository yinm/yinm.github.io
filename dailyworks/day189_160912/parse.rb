require 'yaml'

users = [
  {'name' => 'taguchi', 'score' => 90},
  {'name' => 'fkoji', 'score' => 100},
]

puts users.to_yaml
