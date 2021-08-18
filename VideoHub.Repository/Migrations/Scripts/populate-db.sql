PGDMP     7    3                y           VideoHub    13.3 (Debian 13.3-1.pgdg100+1)    13.2 	    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16384    VideoHub    DATABASE     ^   CREATE DATABASE "VideoHub" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.utf8';
    DROP DATABASE "VideoHub";
                postgres    false            �          0    16402    Channels 
   TABLE DATA           U   COPY public."Channels" ("ChannelId", "Name", "Description", "ImagePath") FROM stdin;
    public          postgres    false    204   �       �          0    16392    Videos 
   TABLE DATA           s   COPY public."Videos" ("VideoId", "Title", "Description", "ImagePreviewPath", "ChannelId", "VideoPath") FROM stdin;
    public          postgres    false    202   �       �          0    16385    __EFMigrationsHistory 
   TABLE DATA           R   COPY public."__EFMigrationsHistory" ("MigrationId", "ProductVersion") FROM stdin;
    public          postgres    false    200   V       �           0    0    Channels_ChannelId_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public."Channels_ChannelId_seq"', 6, true);
          public          postgres    false    203            �           0    0    Videos_VideoId_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public."Videos_VideoId_seq"', 21, true);
          public          postgres    false    201            �     x�e�=n�0�g��@��A�N-Х#�6SI4(�nn_Zq��<=���C/�q��	��)Q�2`�%�R�Q�W��L���,�`!�<f3T�U&PT
WXD�a�2�$�#�gkЅ|ɭ;n�G�)�q�G{��ѽy���_+<�T ��ZC �2<ٳѭ�u�b� �i�?�J3�RiOJ�x�����ڝRAN����+o�$o~���3i���i+�ٽ��ܻmp�\3op��ѽ�>)V[��l������      �   x  x��Xms�H���������* �>bl'�ı���Uw�R� s�4ڙ�	�G�7���#��X��V�CH�=����=�F�*}�bA��YUdj�r���ΩbIs�REJ��Fʂ�V)�R/x��R��*Ki_�F>)����e���[�y���]//�N��6�O�T��2��Z����;��L��?P��p ٓNX��"�F��;�ks���~���TC"�V��6ѥ��'�|j<x�m�����E�;�'�lS���i���Jʅ[I|�<.�ɫL�@�e&sY8K��y&�ǹ&��z��J��x�4�*�]fr)
�ղ�se6���(tZ;��dZ%�C>S�V:��3�A����˽�=����Y01�J=I�f���>V	`a�\�s��\"`���K$��UBs��[�VQ��p������8�Y&1����ߩ��(@���o��ȥ4[i� �F��0h�yd���p��UdC�E��4O�X_�YUJ�輬 f{��������}7�>��=����r��Xl�n;u:y����4G��UG��8�Tt�i�zv����+"�ޟ������3R
�����{8�����ȓ>��K�NFap�s�qf�zsV�D��Վ^eJZ�A��E/�q+zP��T`
�)2e�We�<�ߴ��5[� ���f���8�Z|�-�&`��(��p0to/�{}|���bI��ݫ\f��hY�>�"Yr��(���9(�L��GQ��!��iu֟�Έ��؟G�{v^��R;��mAv��+e �KN���r�0(�w��L��5�*���h���X^W����z����-0׼n�Vn��	������>{���\|�Ts7[�����K�-�a��lXo�q�,l�2�o� [�:����������o�{��]5c�����R�Ż�W&%x[Sѵ�<8h�XǻE��>J������ҿ=��|�I�Cw�U��{]7rp���lC+��Ɨ���ǖ��,��%o|a���C_�fA���8ӡh<����>|�����>�����T�ϮU����!?ߑ�-!1�X���nB���2�3*�$���&�q_�[8�14X"�sN/K�����؆і��[��nz�2D�t�qo��A���X�+��2[{�u��EK�M*T?�1��y���Eg �ͣ����:���f%�L�9�)e�)`�O�%������?<���g����KcK����^�x���(��?���k�+��w��b���+�UV�>S]n���	��?�
�-�ob�g[8>KO��8v)�kQ����\�~�Ӣ9�'���L�}ۂ�T�5��ʭl��$�E�CJ��+��}�C�ǉ��;w`�T����U@��أm,����\9�S-��#�aC��FLf��3�~�0u�{�Q�i酂W��̑`����(��z��EV� �-� �sj�e���9�_.�������.{�������65x��o�nʳ�
#f��՚���VzSmP�TynnF��ʵ���p.+�A�X��� ��2��w���2
�-�k����:���Q��8�cՐI!3��Zg�#���T�?<����ݲޡ��շO �7s��s��P(][^��<
�p��F��T|%p��1����\��o�d�s�J�߹���R/���:n���en�r��+E/r��Y���B�ⶀ�d�2��%�س7H:���R�-G�n���=�d(� 3��V�6����a�4�c��AE��9gz��5|��-A��6�f^�J]fr��.��"�i��#?NIo%�R�����{�^`O�t�d���T������Z}M^�UQ�����h{�5*�e�RY���_�|�ƣ�����|o�~������z���]Ĳ      �   o   x�M�1
�0@��&̌��be����	����
���' K�4n(�L>WV�fEwdb�5�~��|�k���
�c�k��y�>�\ި���0��B����=`�J�?ˎ!y     