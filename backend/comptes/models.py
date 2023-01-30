from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager

# Create your models here.

class ComptesManager(BaseUserManager):
    def create_user(self, nom, prenom, email, adresse, telephone, password=None):
        if not nom:
            raise ValueError('Un utilisateur doit posséder un nom!')        
        
        if not prenom:
            raise ValueError('Un utilisateur doit posséder un prénom!')        

        if not adresse:
            raise ValueError('Un utilisateur doit posséder une adresse!')

        if not telephone:
            raise ValueError('Un utilisateur doit posséder un numéro de telephone!')

        if not email:
            raise ValueError('Un utilisateur doit posséder un email!')

        email = self.normalize_email(email)
        compte = self.model(email=email, nom=nom, prenom=prenom, adresse=adresse, telephone=telephone)

        compte.set_password(password)
        compte.save()

        return compte    

    def create_superuser(self, nom, prenom, email, adresse, telephone, password=None):
        if not nom:
            raise ValueError('Un utilisateur doit posséder un nom!')        
        
        if not prenom:
            raise ValueError('Un utilisateur doit posséder un prénom!')        

        if not adresse:
            raise ValueError('Un utilisateur doit posséder une adresse!')

        if not telephone:
            raise ValueError('Un utilisateur doit posséder un numéro de telephone!')

        if not email:
            raise ValueError('Un utilisateur doit posséder un email!')

        email = self.normalize_email(email)
        compte = self.model(email=email, nom=nom, prenom=prenom, adresse=adresse, telephone=telephone)
        compte.staff = True
        compte.admin = True
        compte.set_password(password)
        compte.save()

        return compte  

        
class Comptes(AbstractBaseUser, PermissionsMixin):
    nom = models.CharField(max_length=255)
    prenom = models.CharField(max_length=255)
    adresse = models.CharField(max_length=500)
    email = models.EmailField(max_length=255, unique=True)
    telephone = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = ComptesManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['nom','prenom','adresse','telephone']

    def get_nom(self):
        return self.nom

    def get_prenom(self):
        return self.nom    
    
    def get_email(self):
        return self.email

    def get_adresse(self):
        return self.adresse

    def get_telephone(self):
        return self.telephone


# dummy user test
#   "nom" : "NomTest",
#   "prenom" : "prenomTest",
#   "adresse" : "Adresse1",
#   "email" : "utest2961@gmail.com",
#   "password" : "++wided123++",
#   "new_password" : "NotSoCommon999",
#   "telephone" : "0552154"