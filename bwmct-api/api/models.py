from django.db import models


TEAMS = (
        ('12', '12'),
        ('XII', 'XII'),
        ('11', '11'),
        ('XI', 'XI'),
        ('10', '10'),
        ('X', 'X'),
        ('9', '9'),
        ('IX', 'IX'),
        ('8', '8'),
        ('IIX', 'IIX'),
)
MATCH_STATES = (
    ('-1', 'TO BE HELD'),
    ('0', 'ONGOING'),
    ('1', 'COMPLETED'),
)
RESULT_CHOICES = (
    ('-1', 'First Team Won'),
    ('0', 'DRAW'),
    ('1', 'Second Team Won'),
)

PLAYER_ROLE = (
    ("Wicket Keeper", "Wicket Keeper"),
    ("Batsman", "Batsman"),
    ("Baller", "Baller"),
    ("All Rounder", "All Rounder"),
)


class Team(models.Model):
    name = models.CharField(max_length=5, choices=TEAMS, unique=True)
    pool = models.IntegerField(default=1, choices=((1, 1), (2, 2)))
    gamesPlayed = models.IntegerField(default=0)
    win = models.IntegerField(default=0)
    loss = models.IntegerField(default=0)
    draw = models.IntegerField(default=0)
    netRun = models.IntegerField(default=0)


    def __str__(self):
        return self.name


class Player(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=64,)
    grade = models.IntegerField(default=12)
    team = models.ForeignKey(Team, on_delete=models.CASCADE, default=1)
    role = models.CharField(
        max_length=15, choices=PLAYER_ROLE, default="Batsman")

    def __str__(self):
        return f'{self.name} from Grade: {self.grade}'


class Match(models.Model):
    firstTeam = models.ForeignKey(
        Team, related_name='firstTeam', on_delete=models.CASCADE, default=1)
    secondTeam = models.ForeignKey(
        Team, related_name='secondTeam', on_delete=models.CASCADE, default=2)
    matchDate = models.DateField()
    matchState = models.CharField(max_length=10, choices=MATCH_STATES)
    result = models.CharField(
        max_length=5, choices=RESULT_CHOICES, default=0, blank=True)
    description = models.TextField(blank=True)
    liveScore= models.CharField(max_length=50, blank=True)
    target = models.CharField(max_length=50, blank=True)

    def __str__(self):
        return f'{self.firstTeam} V/S {self.secondTeam}'
