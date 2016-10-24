%w(
  epel-release
).each do |n|
  package n
end

execute 'setenforce 0'

execute 'echo Hello >> /etc/something' do
  not_if 'grep Hello /etc/something'
end
