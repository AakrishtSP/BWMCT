# Generated by Django 4.1.2 on 2022-10-26 16:10

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Team',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(choices=[('12', '12'), ('XII', 'XII'), ('11', '11'), ('XI', 'XI'), ('10', '10'), ('X', 'X'), ('9', '9'), ('IX', 'IX'), ('8', '8'), ('IIX', 'IIX')], max_length=5, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='Player',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=64)),
                ('grade', models.CharField(choices=[('12', 'XII'), ('11', 'XI'), ('10', 'X'), ('9', 'IX'), ('8', 'IIX')], default=('12', 'XII'), max_length=10)),
                ('team', models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='api.team')),
            ],
        ),
        migrations.CreateModel(
            name='Match',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('matchDate', models.DateField()),
                ('matchState', models.CharField(choices=[('-1', 'TO BE HELD'), ('0', 'ONGOING'), ('1', 'COMPLETED')], max_length=10)),
                ('result', models.CharField(blank=True, choices=[('-1', 'First Team Won'), ('0', 'DRAW'), ('1', 'Second Team Won')], default=0, max_length=5)),
                ('description', models.TextField(blank=True)),
                ('firstTeam', models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='firstTeam', to='api.team')),
                ('secondTeam', models.ForeignKey(default=2, on_delete=django.db.models.deletion.CASCADE, related_name='secondTeam', to='api.team')),
            ],
        ),
    ]
