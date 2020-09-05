class House:
    def __init__(self, numGarages, dogName):
        self.numLivingRooms = 1
        self.numBathsnumBaths = 3
        self.numBedrooms = 4
        self.numBackYard = 1
        self.garageCount = numGarages
        self.nameOfOwner = dogName
        self.solarPanels = 0

    def addSolarPower(self, amount):
        self.solarPanels += amount
        return self

    def changeDogName(self, newName):
        self.nameOfOwner = newName
        return self


#creating instances of house class(house objects)
house1 = House(2, "Junior")
house2 = House(0, "Jeff")
house3 = House(1, "Rover")
house4 = House(2, "Beamer")


print(house1.solarPanels)
print(house2.solarPanels)
print(house3.solarPanels)
print(house4.solarPanels)

print("*********")
house1.addSolarPower(3).addSolarPower(5).addSolarPower(10).changeDogName("wazzaa").addSolarPower(5)
# house1.addSolarPower(5)
# house1.addSolarPower(10)

house2.addSolarPower(2)

print(house1.solarPanels)
print(house2.solarPanels)
print(house3.solarPanels)
print(house4.solarPanels)
print(house1.nameOfOwner)