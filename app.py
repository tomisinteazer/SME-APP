class Animal:
    def __init__(self, name, kind):
        self.name = name
        self.kind = kind

    def animalName(self):
        return "this is a " + self.name


rabbit = Animal("rabbit", "domestic")
print(rabbit.animalName())
