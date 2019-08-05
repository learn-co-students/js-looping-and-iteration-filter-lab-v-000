def find_matching(drivers, name)
  drivers.select do |driver|
    driver.downcase == name.downcase
  end
end

def fuzzy_match(drivers, entry)
  drivers.select do |driver|
    driver.downcase.index(entry.downcase) == 0
  end
end

def match_name(drivers, name)
  drivers.select do |driver|
    driver[:name].downcase == name.downcase
  end
end
