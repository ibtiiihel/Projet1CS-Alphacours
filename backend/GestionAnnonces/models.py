from django.db import models
from comptes.models import Comptes

# Create your models here.

CATEGORIES = (
    ('Primaire' , 'Primaire'),
    ('CEM', 'CEM'),
    ('Lycee', 'Lycee')
)

THEMES = (
    ('Amazigh' , 'Amazigh'),
    ('Anglais', 'Anglais'),
    ('Arabe', 'Arabe'),
    ('Education civile', 'Education civile'),
    ('Comptabilité et gestion financière', 'Comptabilité et gestion financière'),
    ('Economie et management', 'Economie et management'),
    ('Espagnol', 'Espagnol'),
    ('Français', 'Français'),
    ('Allemand', 'Allemand'),
    ('Education islamique', 'Education islamique'),
    ('Italien', 'Italien'),
    ('Mathématiques', 'Mathématiques'),
    ('Physique', 'Physique'),
    ('Sciences naturelles', 'Sciences naturelles'),
    ('Technologie', 'Technologie'),
    ('Jurisprudence', 'Jurisprudence')
)

MODALITES = (
    ('ONLINE','ONLINE'),
    ('OFFLINE', 'OFFLINE')
)

WILAYAS = (
    ('Adrar',''),
    ('Chlef',''),
    ('Laghouat',''),
    ('Oum El Bouaghi',''),
    ('Batna',''),
    ('Béjaia',''),
    ('Biskra',''),
    ('Béchar',''),
    ('Blida','Blida'),
    ('Bouira','Bouira'),
    ('Tamanrasset','Tamanrasset'),
    ('Tébessa','Tébessa'),
    ('Tlemcen','Tlemcen'),
    ('Tiaret','Tiaret'),
    ('Tizi Ouzou','Tizi Ouzou'),
    ('Alger','Alger'),
    ('Djelfa','Djelfa'),
    ('Jijel','Jijel'),
    ('Sétif','Sétif'),
    ('Saida','Saida'),
    ('Skikda','Skikda'),
    ('Sidi Bel Abbès','Sidi Bel Abbès'),
    ('Annaba','Annaba'),
    ('Guelma','Guelma'),
    ('Constantine','Constantine'),
    ('Médéa','Médéa'),
    ('Mostaganem','Mostaganem'),
    ('Msila','Msila'),
    ('Mascara','Mascara'),
    ('Ouargla','Ouargla'),
    ('Oran','Oran'),
    ('El Bayadh','El Bayadh'),
    ('Illizi','Illizi'),
    ('Bordj Bou Arreridj','Bordj Bou Arreridj'),
    ('Boumerdès','Boumerdès'),
    ('El Tarf','El Tarf'),
    ('Tindouf','Tindouf'),
    ('Tissemsilt','Tissemsilt'),
    ('El Oued','El Oued'),
    ('Khenchela','Khenchela'),
    ('Souk Ahras','Souk Ahras'),
    ('Tipaza','Tipaza'),
    ('Mila','Mila'),
    ('Aïn Defla','Aïn Defla'),
    ('Naama','Naama'),
    ('Ain Témouchent','Ain Témouchent'),
    ('Ghardaia','Ghardaia'),
    ('Relizane','Relizane'),
    ('Timimoun','Timimoun'),
    ('Bordj Badji Mokhtar','Bordj Badji Mokhtar'),
    ('Ouled Djellal','Ouled Djellal'),
    ('Béni Abbès','Béni Abbès'),
    ('In Salah','In Salah'),
    ('In Guezzam','In Guezzam'),
    ('Touggourt','Touggourt'),
    ('Djanet','Djanet'),
    ('El Mghair','El Mghair'),
    ('El Meniaa','El Meniaa')
)


class Lieu(models.Model):
    wilaya = models.CharField(max_length=255, choices=WILAYAS)
    commune = models.CharField(max_length=255)
    adresse = models.TextField(max_length=500)

class Annonce(models.Model):
    titre  = models.CharField(max_length=255)
    categorie = models.CharField(max_length=10, choices=CATEGORIES)
    theme = models.CharField(max_length=50, choices=THEMES)
    modalite = models.CharField(max_length=10, choices=MODALITES)
    description = models.TextField(max_length=1000)
    tarif = models.DecimalField(max_digits=10, decimal_places=2)
    Annonceur = models.ForeignKey(Comptes, on_delete=models.CASCADE)
    idLieu = models.ForeignKey(Lieu, on_delete=models.CASCADE)
    datePublication = models.DateTimeField(auto_now_add=True)
    lienGoogleMap = models.URLField()
    
    def __str__(self):
        return self.titre + ' | ' + self.Annonceur