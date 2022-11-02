from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Match, Team, Player
from .serializers import MatchSerializer, TeamSerializer, PlayerSerializer

# Create your views here.


@api_view(['GET'])
def getMatch(request):
    matches = Match.objects.all()
    serializer = MatchSerializer(matches, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getTeam(request):
    teams = Team.objects.all()
    serializer = TeamSerializer(teams, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getPlayer(request):
    players = Player.objects.all()
    serializer = PlayerSerializer(players, many=True)
    return Response(serializer.data)
