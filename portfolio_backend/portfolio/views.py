from django.shortcuts import render
from rest_framework import viewsets
from .models import Project, BlogPost, Contact
from .serializers import ProjectSerializer, BlogPostSerializer, ContactSerializer
from django.core.mail import send_mail


# Create your views here.

class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer


class BlogPostViewSet(viewsets.ModelViewSet):
    queryset = BlogPost.objects.all()
    serializer_class = BlogPostSerializer


class ContactViewSet(viewsets.ModelViewSet):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer


    # Email for Contact Form
    def perform_create(self, serializer):
        # email is sent after form submission
        contact = serializer.save()
        send_mail(
            subject=f"New Contact: {contact.name}",
            message=contact.message,
            from_email=contact.email,
            recipient_list=['evansjacobmurimi@gmail.com'],
        )