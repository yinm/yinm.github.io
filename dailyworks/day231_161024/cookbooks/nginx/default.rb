%w(
  nginx
).each do |n|
  package n
end

remote_file '/etc/nginx/nginx.conf'

template '/etc/nginx/conf.d/itamae'
