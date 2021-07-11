-- delete from public."Videos";
-- delete from public."Channels";

insert into public."Channels"("ChannelId", "Name", "Description", "ImageUrl")
values
(1, 'Wild Coding', 'A channel that expolores programming and some weird cases that you rarely work with on commercial projects.', 'https://yt3.ggpht.com/ytc/AKedOLTKDS54y0X331WdpiyVM7tgAveqmEm7ExZ4uLnY=s88-c-k-c0x00ffffff-no-rj')
,(2, 'Science', 'A channel about science and all of the things that relate to it', 'https://yt3.ggpht.com/ytc/AKedOLTvu1OUcurcqfbPStA-6PEj0Uki1OnnYowr3nwpxw=s48-c-k-c0x00ffffff-no-rj')
,(3, 'Astronomy', 'A channel about astronomy. Contains a lot of great videos about our universe.', 'https://yt3.ggpht.com/kjP5K54Yic0VyjmlgBIFRCk2x05vNTu5UMemVOW3Mjr8m5CYPQAtLko5qtilxAVNTSbCMa_x=s176-c-k-c0x00ffffff-no-rj-mo');

insert into public."Videos"("Title", "Description", "ImagePreviewUrl", "ChannelId")
values 
('Tropical Leaf in Sunlight', 'Sun setting behind a green tropical leaf.', 'https://cdn.videvo.net/videvo_files/video/free/2019-09/thumbnails/190828_27_SuperTrees_HD_17_small.jpg', 2)
,('Coronavirus Cell Zoom In Red', 'Slow zoom into a coronavirus cell rendered in red', 'https://cdn.videvo.net/videvo_files/video/premium/2020-06/thumbnails/200620_05_Covid_Microscope_1_Red_Zoom_4K_Prores422_small.jpg', 2)
,('Closeup mathematical formula and elements on blackboard', 'Closeup mathematical formula and elements on blackboard, school background. Elegant and luxury animation footage of education theme.', 'https://cdn.videvo.net/videvo_files/video/premium/video0291/thumbnails/_School14_small.jpg', 2)
,('Archive Clip of Nuclear Bomb Explosion', 'Archive footage of an atomic bomb explosion.', 'https://cdn.videvo.net/videvo_files/video/premium/2020-08/thumbnails/200309_02_atomic%20archive_collection_9_003_small.jpg', 2)
,('Elevating Camera Shot of Corridor in Working Data Center Full of Rack Servers and Supercomputers.', 'Elevating Camera Shot of Corridor in Working Data Center Full of Rack Servers and Supercomputers. Shot on RED EPIC-W 8K Helium Cinema Camera.', 'https://cdn.videvo.net/videvo_files/video/premium/getty_56/customThumbnails/istock-661451668.jpg', 2)
,('Red Blood Cells','An animation of red blood cells floating past the camera.','https://cdn.videvo.net/videvo_files/video/free/2013-09/thumbnails/RedBloodCellsVidevo_small.jpg',2)

,('The International Space Station Flies Over The Earth With Aurora Borealis Visible','The International Space Station flies over the earth with aurora borealis visible.','https://cdn.videvo.net/videvo_files/video/premium/video0035/thumbnails/900-1_900-0484-PD2_small.jpg', 3)
,('Stars Timelapse from Beach','A timelapse of stars moving across the night sky.','https://cdn.videvo.net/videvo_files/video/free/2014-01/thumbnails/Stars_Timelapse_from_Beach_1Videvo_small.jpg', 3)
,('Animation Of First Ever Observed Black Hole (No Audio) 2019','Animation of first ever observed black hole (no audio), 2019','https://cdn.videvo.net/videvo_files/video/premium/video0390/thumbnails/903_903-0029_small.jpg', 3)
,('Amazing Shots Of The Sun From The International Space Station In 4K','Amazing shots of the sun from the International Space Station in 4k.','https://cdn.videvo.net/videvo_files/video/premium/video0319/thumbnails/610_610-0034_small.jpg', 3)
,('High Quality Footage Of the Preparations For the Apollo 11 Mission And Astronauts Neil Armstrong And Buzz Aldrins Return To Earth','Extremely high quality footage of the preparations for the Apollo 11 mission and astronauts Neil Armstrong and Buzz Aldrin''s return to Earth, 1969','https://cdn.videvo.net/videvo_files/video/premium/video0390/thumbnails/903_903-0001_small.jpg', 3)
,('Stars Timelapse','A timelapse of the night sky, with the Milky Way clearly visible. In the foreground is an electricity pylon.','https://cdn.videvo.net/videvo_files/video/free/2014-01/thumbnails/Stars_Timelapse_2Videvo_small.jpg', 3)

,('Tracking Past Women Working on Laptop','A tracking shot past young business women working and discussing work on a laptop.','https://cdn.videvo.net/videvo_files/video/free/2018-02/thumbnails/171003B_022_2K_small.jpg', 1)
,('Fun Cartoon Casual Guy Coding Animation','Fun Cartoon Casual Guy Coding Animation.','https://cdn.videvo.net/videvo_files/video/free/2020-03/thumbnails/Tromeur_breton_code_free_small.jpg', 1)
,('Black hat hacker stealing data and hacking networks','Black hat hacker working in the dark with his computers, he is stealing data and hacking networks, cyber crime concept','https://cdn.videvo.net/videvo_files/video/premium/getty_2/customThumbnails/istock-1010907888.jpg', 1)
,('Computer Code','Sequence of changing data and computer programming information','https://cdn.videvo.net/videvo_files/video/premium/video0036/thumbnails/computer_code11_small.jpg', 1)
,('Wires cables hash tag fly through data internet tweet internet hashtag','Wires cables hash tag fly through data internet tweet internet hashtag #.','https://cdn.videvo.net/videvo_files/video/premium/getty_57/customThumbnails/istock-959062514.jpg', 1)
,('Team of Smart and Respectable Business People in the Conference Room','Team of Smart and Respectable Business People in the Conference Room, They Work on the Company Growth and Development. Diverse Group of Mixed Ethnicity and Gender in the Modern Building. Shot on RED EPIC-W 8K Helium Cinema Camera.','https://cdn.videvo.net/videvo_files/video/premium/getty_53/customThumbnails/istock-898933674.jpg', 1);