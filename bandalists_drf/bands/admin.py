from django.contrib import admin
from bands.models import Band


class BandAdmin(admin.ModelAdmin):
    prepopulated_fields = ({'slug': ('name',)})


admin.site.register(Band, BandAdmin)
