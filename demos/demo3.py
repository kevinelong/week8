#
# Single Line comments only?
#
'''
triple quotes allow strings with new lines
content
more content
'''

x = 123
s = "ABC"

LIMIT = 25
age = 33

# BRANCHES CONDITIONALS AND LOGIC OPERATORS
if age >= LIMIT:
    print("Good to go!!!")
elif age >= LOWERE_LIMIT:
    print("Maybe?")
else:
    print("Nope! Nope! Nope! ")

# LOOPS FOR AN WHILE
for i in range(5):  # 0-4 like th eclassic for(;;)
    print(i)

# looping through list of dict,
# in a dict; quotes on keys are not optional
people = [
    {"id": 123, "name": "Kevin"},
    {"id": 234, "name": "Nina"}]

print(people[1]["name"])  # mus be square brackes not dot notation

for person in people:
    id = person['id']  # access with a string and not the "dot" operator.
    name = person['name']

    # f strings are like js template string ``
    print(f"ID: {id}, NAME: {name}.")

count = 10
while count > 0:
    print(count, "...")
    count = count - 1
print("Blastoff!!!")

# DEFINING FUNCTIONS


def addTwo(a, b):
    return a + b


#call and print
print(addTwo(3, 4))  # outputs 7 (an integer)
print(addTwo('3', '4'))  # outputs "34"


class Employee:  # define a template (e.g. blueprint or recipe)
    def __init__(self, id, name):
        self.id = id
        self.name = name

    def __str__(self):
        return f"ID: {self.id}, NAME: {self.name}."


emp = Employee(333, "Finley")  # create a concrete "instance"
print(emp)
