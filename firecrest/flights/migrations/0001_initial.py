# Generated by Django 4.0.4 on 2022-05-08 18:57

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Airline',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('airline_id', models.CharField(max_length=100)),
                ('airline_name', models.CharField(max_length=30)),
                ('airline_country', models.CharField(max_length=30)),
            ],
        ),
        migrations.CreateModel(
            name='Booking',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('booking_id', models.CharField(max_length=100, unique=True)),
                ('status', models.CharField(max_length=20)),
                ('user_id', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Flight',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('flight_id', models.CharField(max_length=100)),
                ('departing_gate', models.CharField(max_length=30)),
                ('arriving_gate', models.CharField(max_length=30)),
                ('departing_airport', models.CharField(max_length=30)),
                ('arriving_airport', models.CharField(max_length=30)),
                ('airline', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='flights.airline')),
            ],
        ),
        migrations.CreateModel(
            name='Flight_Seat',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('seat_id', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Flight_Manifest',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('plain_id', models.CharField(max_length=100)),
                ('created_at', models.DateTimeField()),
                ('updated_at', models.DateTimeField()),
                ('booking', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='flights.booking')),
                ('flight', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='flights.flight')),
            ],
        ),
        migrations.AddField(
            model_name='booking',
            name='flight',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='flights.flight'),
        ),
        migrations.AddField(
            model_name='booking',
            name='seat',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='flights.flight_seat'),
        ),
    ]
