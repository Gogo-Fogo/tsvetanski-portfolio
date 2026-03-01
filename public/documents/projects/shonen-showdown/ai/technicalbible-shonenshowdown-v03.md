# TechnicalBible_ShonenShowdown_v03

Source: `../recruiter/shonen-showdown-technical-bible-v03.pdf`

## Page 1

Shonen Showdown: Master Design & 
Technical Bible 
Version: 0.3 (Final Draft) 
Engine: Unity 6 (URP) 
Network: Photon Fusion 2 (Shared Mode) 
Repo Host: GitHub (Private) 
PART 1: The "Don't Break The Game" Rules 
Rule #1: The "Windows Explorer" Ban 
●​ NEVER move, rename, or delete files using the standard Windows Folder/Explorer. 
●​ ALWAYS perform these actions inside the Unity Project Window. 
●​ Why? Unity creates a hidden ID card (.meta file) for every asset. If you move the file in 
Windows, you leave the ID card behind, resulting in "Missing Script" errors and Pink 
Squares. 
Rule #2: The Underscore Hierarchy 
●​ All team-created assets must reside inside Assets/_Shonen/. 
●​ Never put files in the root Assets/ folder. That area is reserved for Plugins (Photon, 
DotTween, etc.). 
Rule #3: Scene Sovereignty (The "Stay In Your Lane" Treaty) 
1.​ Problem: If two people save the same Scene (.unity file), GitHub will break. 
2.​ Solution: We split the game into three distinct Scenes. 
○​ Georgi owns: GameScene.unity (The Core Battle Logic). 
○​ Ricardo owns: MainMenu.unity (UI, Lobby, Character Select). 
○​ Sam owns: Sam_Sandbox.unity (A safe place to test Card Data and Audio). 
3.​ The Rule: You may open another person's scene to look, but NEVER SAVE IT. 
PART 2: Team Workflows & Folder Dictionaries 
Section for RICARDO (Art Lead) 
Your Domain: Assets/_Shonen/Art/ 
Your Scene: Assets/_Shonen/_Scenes/MainMenu.unity 
Folder Path 
What goes here? 
When do I use this?

## Page 2

.../Art/Characters 
.fbx models of Monsters. 
When you export a new 
monster from Blender. 
.../Art/Environment 
Room walls, props. 
When building the "Share 
House" or Battle Arenas. 
.../Art/CardIllustrations 
.png sprites for cards. 
Set Texture Type to 
"Sprite (2D and UI)". 
.../Art/UI 
.png sprites for Menus. 
Set Texture Type to 
"Sprite (2D and UI)". 
.../Prefabs/UI 
UI Prefabs (Finished Menu). 
Main Workspace. Build 
menus here, not just in the 
scene. 
.../Prefabs/Monsters 
Monster Prefabs. 
The Handoff. Drag your 
FBX here and make it a 
Prefab when done. 
Critical Rules for Ricardo 
1.​ Pivot Point: The pivot of every character must be at the FEET (Bottom Center). 
2.​ Scale: 1 Unity Unit = 1 Meter. (Standard Monster = ~1.5 units). 
3.​ Texture Sizes: Standard: 1024. Bosses: 2048. UI: 512. 
Section for SAM (Design & Audio) 
Your Domain: Assets/_Shonen/Data/ and Assets/_Shonen/Audio/ 
Your Scene: Assets/_Shonen/_Scenes/Sam_Sandbox.unity 
Folder Path 
What goes here? 
When do I use this? 
.../Data/Cards 
Scriptable Objects (Card 
Files). 
Check Google Sheet first. 
Then Right-Click Create > 
Shonen > Card Data. 
.../Data/Keywords 
Scriptable Objects (Tags). 
Use for reusable effects 
(e.g., "Piercing",

## Page 3

"DirectAttack"). 
.../Data/GameSettings 
Global config files. 
Only when Georgi tells you 
to tweak global rules. 
.../Audio/SFX 
.wav files (Short sounds). 
When adding impact 
noises, sword slashes, or UI 
clicks. 
.../Audio/BGM 
.mp3 files (Long music). 
When adding background 
tracks. 
Critical Rules for Sam 
●​ Spreadsheet First: Always define stats in the Google Sheet before creating the file in 
Unity. 
●​ Card Creation: NEVER duplicate a card file in Windows Explorer. Always use Ctrl+D 
inside Unity. 
●​ Prefix Protocol: All Card Data files must be named Card_[Name] (e.g., 
Card_GedoStatue). 
●​ Sandbox Rule: Test your new cards in Sam_Sandbox to avoid breaking Georgi's battle 
code. 
Section for GEORGI (Lead Dev) 
Your Domain: Assets/_Shonen/Scripts/ and Assets/_Shonen/Prefabs/ 
Folder Path 
What goes here? 
When do I use this? 
.../Scripts/Core 
Game Managers, Turn 
Logic. 
For the "Brain" of the 
game. 
.../Scripts/Network 
Photon Fusion code. 
For multiplayer syncing. 
.../Scripts/Cards 
Card behavior logic. 
For specific card effects. 
.../Prefabs/Monsters 
3D Models setup for 
Gameplay. 
The object spawned on the 
table (linked to CardData).

## Page 4

.../Prefabs/Cards 
Physical Card Templates. 
The object the player holds 
in their hand. 
.../Prefabs/Effects 
Particle Systems/VFX. 
Explosions, Summoning 
circles. 
PART 3: The Daily Git Ritual 
Step 1: Start of Day (Coffee Time) 
●​ Open GitHub Desktop. 
●​ Switch to the dev branch. 
●​ Click Fetch origin $\rightarrow$ Pull origin. (Get the latest files). 
Step 2: Start Work (The Traffic Light) 
●​ Open Trello. 
●​ Move a card to "DOING". 
1.​ Crucial: This signals "I am locking this file/scene." 
2.​ Example: If Ricardo puts "Main Menu Design" in DOING, Georgi knows not to touch 
MainMenu.unity. 
●​ Switch to your personal branch (e.g., art/ricardo). 
●​ Merge dev into your current branch. (Update your branch with the team's latest work). 
●​ Open Unity and work. 
Step 3: End of Day 
●​ Commit your changes ("Added Gedo Statue Art"). 
●​ Push to origin. 
●​ Trello: Right-click your card and Archive it. 
○​ This signals "I am done. The file is unlocked."
