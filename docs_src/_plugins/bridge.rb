require 'yaml'

module Bridge
  class Generator < Jekyll::Generator
    def generate(site)
      site.data["configBridge"] = YAML.load_file("./docs_src/_config/configBridge.json")
    end
  end
end