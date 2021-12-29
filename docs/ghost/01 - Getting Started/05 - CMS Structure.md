---
title: CMS Structure
description: Ghost CMS structure
---

Ghost is a simple CMS and has a fixed structure that you can create with Webflow. There are 2 CMS collection that are mandatory and must be created always: **Author** and **Tag**. After those 2 mandatory collections, you can create all the CMS collections you want, but all the collections **MUST** follow a strict configuration in terms of fields.

## Author

**Author** collections, represents the users that write all the articles of your Ghost blog.

This collection slug must be **author**. The fields configuration must adhere to the following scheme:


|Field Label| Field Type | Description
|----|----|----|
| Bio | Plain text | Short bio of the Author|
| Location | Plain text | Author's Location|
| Mail | Email | Author's Email|
| Website | Link | Author's Website|
| Twitter Profile | Link | Url to Twitter Profile |
| Facebook Profile | Link | Url to Facebook Profile |
| Picture | Image | Author's Profile Image |
| Cover Image | Image | Author's Cover Image |

## Tag

Tags are the primary taxonomy within Ghost for filtering and organising the relationships between your content.

Right off the bat, probably the best way to think about tags in Ghost is like labels in GMail. Tags are a powerful, dynamic taxonomy which can be used to categorise content, control design, and drive automation within your site.

This collection in Webflow must have the slug **tag**. The fields configuration must adhere to the following scheme:

|Field Label| Field Type | Description
|----|----|----|
| Image | Image | The cover image associated with the tag|
| Description | Plain text | Description of the tag|
| Color | Color | The accent color of the tag|


## Any Other CMS Collection

You can have infinite other CMS collections, they all will be converted as **Posts** with a specific *internal tag* in order to be categorized differently. Posts are the primary entry-type within Ghost, and generally represent the majority of stored data.

If you create a CMS collection called **Blog** in Webflow, this collection will be converted in Posts that have the internal tag **#blog**.

All the collections except for Author and Tag must adhere to the following schema configuration for fields:

|Field Label| Field Type | Field Configuration | Description
|----|----|----|----|
| Image | Image | | The Featured Image of the post|
| Excerpt | Plain text | | A short preview of your post content|
| Content | Rich text | | The content of the post|
| Featured | Switch | | Indicates a featured post |
| Visibility | Option | Options must be:</br><ul style="text-align: left; "><li>Public</li><li>Members</li><li>Paid Members</li></ul>| Visibility restriction of the post |
| Primary Author | Reference | Must reference **author** collection | The first author associated with the post |
| Authors | Multi-reference | Must reference **author** collection | The authors associated with the post |
| Primary Tag | Reference | Must reference **tag** collection | The first tag associated with the post |
| Tags | Multi-reference | Must reference **tag** collection | The tags associated with the post |