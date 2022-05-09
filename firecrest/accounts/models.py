from unicodedata import name
from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager

# Overwrite BaseUserManager to create user
# To create admin/superuser, if needed, make function create_superuser()


class UserAccountManager(BaseUserManager):
    def create_user(self, email, name, password=None, **extra_fields):
        if not email:
            raise ValueError('No Email Found, Enter Email Address')

        # Normalise Email e.g: SumeetGRG2001@gmail.com --> sumeetgrg2001@gmail.com
        email = self.normalize_email(email)

        user = self.model(email=email, name=name, **extra_fields)

        # Create hashed version of password to increase level of security
        user.set_password(password)
        user.save()

        return user

    def create_superuser(self, email, name, password, **extra_fields):
        """
        Creates and saves a superuser with the given email and password.
        """
        user = self.create_user(
            email,
            name,
            password=password,
            **extra_fields,
        )
        user.staff = True
        user.admin = True
        user.save(using=self._db)
        return user


class UserAccount(AbstractBaseUser, PermissionsMixin):
    # User attributes
    email = models.EmailField(max_length=255, unique=True)
    name = models.CharField(max_length=100)
    phone = models.CharField(max_length=50)
    passport_number = models.CharField(max_length=50)
    country = models.CharField(max_length=50)

    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = UserAccountManager()

    # Default Login - Email
    USERNAME_FIELD = 'email'
    # Required Fields are name, phone and passport number
    REQUIRED_FIELDS = ['name', 'phone', 'passport_number']

    def get_full_name(self):
        return self.name

    def get_short_name(self):
        return self.name

    def __str__(self):
        return self.email
