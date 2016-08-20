from django.contrib import admin
from bands.models import BandImage, Band, Instrument

admin.site.register(Band)
admin.site.register(BandImage)
admin.site.register(Instrument)
